document.addEventListener("DOMContentLoaded", function() {
    const Text = ['Web Developer', 'Java Developer', 'DSA'];
    const Typing = new AutoTyping('.text-selector',Text, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    Typing.start()
})