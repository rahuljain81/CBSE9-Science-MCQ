// ── State ──
let currentSubject = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let userAnswers = [];
let timerInterval = null;
let elapsedSeconds = 0;
let qTimerInterval = null;
let qTimeLeft = 30;
const Q_TIME_LIMIT = 30;
let currentUser = null;

// ── Google Login ──
function handleGoogleLogin(response) {
    const payload = parseJwt(response.credential);
    currentUser = {
        name: payload.name,
        email: payload.email,
        picture: payload.picture
    };
    localStorage.setItem("mcq_user", JSON.stringify(currentUser));
    showHomeScreen();
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function guestLogin() {
    currentUser = { name: "Guest", email: "", picture: "" };
    localStorage.setItem("mcq_user", JSON.stringify(currentUser));
    showHomeScreen();
}

function showHomeScreen() {
    document.getElementById("user-name").textContent = "Hi, " + currentUser.name;
    var avatar = document.getElementById("user-avatar");
    if (currentUser.picture) {
        avatar.src = currentUser.picture;
        avatar.style.display = "block";
    } else {
        avatar.style.display = "none";
    }
    showScreen("home-screen");
}

function logout() {
    currentUser = null;
    localStorage.removeItem("mcq_user");
    showScreen("login-screen");
}

// ── Init ──
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("physics-count").textContent = questionBank.physics.length + " questions";
    document.getElementById("chemistry-count").textContent = questionBank.chemistry.length + " questions";
    document.getElementById("biology-count").textContent = questionBank.biology.length + " questions";

    // Auto-login from saved session
    var saved = localStorage.getItem("mcq_user");
    if (saved) {
        currentUser = JSON.parse(saved);
        showHomeScreen();
    }
});

// ── Navigation ──
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function goHome() {
    stopTimer();
    stopQTimer();
    showHomeScreen();
}

// ── Quiz Start ──
function startQuiz(subject) {
    currentSubject = subject;
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    userAnswers = [];
    elapsedSeconds = 0;

    if (subject === "mixed") {
        const all = [
            ...questionBank.physics.map(q => ({ ...q, subject: "Physics" })),
            ...questionBank.chemistry.map(q => ({ ...q, subject: "Chemistry" })),
            ...questionBank.biology.map(q => ({ ...q, subject: "Biology" }))
        ];
        currentQuestions = shuffle(all).slice(0, 15);
    } else {
        currentQuestions = shuffle([...questionBank[subject]]).map(q => ({
            ...q,
            subject: subject.charAt(0).toUpperCase() + subject.slice(1)
        }));
    }

    document.getElementById("total-questions").textContent = currentQuestions.length;
    document.getElementById("current-score").textContent = 0;

    const label = subject === "mixed" ? "Mixed" : subject.charAt(0).toUpperCase() + subject.slice(1);
    document.getElementById("subject-label").textContent = label;

    showScreen("quiz-screen");
    startTimer();
    renderQuestion();
    startQTimer();
}

// ── Render Question ──
function renderQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById("question-number").textContent = currentIndex + 1;
    document.getElementById("chapter-label").textContent = q.chapter;
    document.getElementById("question-text").textContent = q.question;
    document.getElementById("explanation").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");

    const pct = (currentIndex / currentQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = pct + "%";

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerHTML = '<span class="option-letter">' + letters[i] + '</span><span>' + opt + '</span>';
        div.addEventListener("click", () => selectOption(i));
        container.appendChild(div);
    });
}

// ── Select Option ──
function selectOption(selected) {
    stopQTimer();
    const q = currentQuestions[currentIndex];
    const options = document.querySelectorAll(".option");

    options.forEach(o => o.classList.add("disabled"));
    options[q.answer].classList.add("correct");

    if (selected === q.answer) {
        score++;
        correctCount++;
        userAnswers.push({ selected: selected, correct: true });
    } else {
        options[selected].classList.add("wrong");
        wrongCount++;
        userAnswers.push({ selected: selected, correct: false });
    }

    document.getElementById("current-score").textContent = score;

    const explEl = document.getElementById("explanation");
    explEl.innerHTML = "<strong>Explanation:</strong> " + q.explanation;
    explEl.classList.remove("hidden");

    const nextBtn = document.getElementById("next-btn");
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? "See Results →" : "Next Question →";
}

// ── Question Timer ──
function startQTimer() {
    stopQTimer();
    qTimeLeft = Q_TIME_LIMIT;
    updateQTimerDisplay();
    qTimerInterval = setInterval(function() {
        qTimeLeft--;
        updateQTimerDisplay();
        if (qTimeLeft <= 0) {
            stopQTimer();
            timeUpAutoSkip();
        }
    }, 1000);
}

function stopQTimer() {
    if (qTimerInterval) { clearInterval(qTimerInterval); qTimerInterval = null; }
}

function updateQTimerDisplay() {
    var circumference = 2 * Math.PI * 16; // r=16
    var offset = circumference * (1 - qTimeLeft / Q_TIME_LIMIT);
    var fg = document.getElementById("q-timer-fg");
    var ring = document.getElementById("q-timer-ring");
    fg.style.strokeDashoffset = offset;
    document.getElementById("q-timer-sec").textContent = qTimeLeft;
    ring.classList.remove("warning", "danger");
    if (qTimeLeft <= 5) ring.classList.add("danger");
    else if (qTimeLeft <= 10) ring.classList.add("warning");
}

function timeUpAutoSkip() {
    var q = currentQuestions[currentIndex];
    var options = document.querySelectorAll(".option");
    options.forEach(function(o) { o.classList.add("disabled"); });
    options[q.answer].classList.add("correct");
    userAnswers.push({ selected: -1, correct: false });
    wrongCount++;

    var explEl = document.getElementById("explanation");
    explEl.innerHTML = "<strong>⏰ Time's up!</strong> " + q.explanation;
    explEl.classList.remove("hidden");

    var nextBtn = document.getElementById("next-btn");
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? "See Results →" : "Next Question →";
}

// ── Next ──
function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
        stopTimer();
        stopQTimer();
        showResult();
    } else {
        renderQuestion();
        startQTimer();
    }
}

// ── Timer ──
function startTimer() {
    stopTimer();
    elapsedSeconds = 0;
    updateTimerDisplay();
    timerInterval = setInterval(function() {
        elapsedSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerDisplay() {
    var m = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
    var s = String(elapsedSeconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = m + ":" + s;
}

function formatTime(secs) {
    var m = Math.floor(secs / 60);
    var s = secs % 60;
    return m > 0 ? m + "m " + s + "s" : s + "s";
}

// ── Results ──
function showResult() {
    var total = currentQuestions.length;
    var skipped = total - correctCount - wrongCount;
    var pct = Math.round((score / total) * 100);

    var emoji, title;
    if (pct >= 80)      { emoji = "🏆"; title = "Excellent!"; }
    else if (pct >= 60) { emoji = "😊"; title = "Good Job!"; }
    else if (pct >= 40) { emoji = "💪"; title = "Keep Practicing!"; }
    else                { emoji = "📚"; title = "Need More Study"; }

    document.getElementById("result-emoji").textContent = emoji;
    document.getElementById("result-title").textContent = title;
    document.getElementById("final-score").textContent = score;
    document.getElementById("final-total").textContent = total;
    document.getElementById("stat-correct").textContent = correctCount;
    document.getElementById("stat-wrong").textContent = wrongCount;
    document.getElementById("stat-skipped").textContent = skipped;
    document.getElementById("stat-time").textContent = formatTime(elapsedSeconds);

    document.getElementById("progress-fill").style.width = "100%";
    showScreen("result-screen");
}

// ── Review ──
function reviewAnswers() {
    var container = document.getElementById("review-container");
    container.innerHTML = "";
    var letters = ["A", "B", "C", "D"];

    currentQuestions.forEach(function(q, i) {
        var ua = userAnswers[i];
        var status = !ua ? "skipped" : ua.correct ? "correct" : "wrong";

        var html = '<div class="review-item review-' + status + '">';
        html += '<div class="review-q-num">Question ' + (i + 1) + ' · ' + q.chapter + '</div>';
        html += '<div class="review-question">' + q.question + '</div>';
        html += '<div class="review-options">';

        q.options.forEach(function(opt, j) {
            var cls = "";
            if (j === q.answer) cls = "r-correct";
            else if (ua && j === ua.selected && !ua.correct) cls = "r-wrong";
            html += '<div class="review-option ' + cls + '">' + letters[j] + '. ' + opt + '</div>';
        });

        html += '</div>';
        html += '<div class="review-explanation">💡 ' + q.explanation + '</div>';
        html += '</div>';

        container.innerHTML += html;
    });

    showScreen("review-screen");
}

// ── Retry ──
function retryQuiz() {
    startQuiz(currentSubject);
}

// ── Shuffle ──
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
