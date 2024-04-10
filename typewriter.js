function initTypewriter(options) {
    const sentences = options.sentences || [];
    const targetElementId = options.targetElementId;
    const targetElementClass = options.targetElementClass;
    const textColor = options.color || 'black';
    const typingSpeed = options.typingSpeed || 100;
    const eraseSpeed = options.eraseSpeed || 50;
    const delayBeforeErasing = options.delayBeforeErasing || 1500;
    const delayBeforeTypingNext = options.delayBeforeTypingNext || 500;
    const fontSize = options.fontSize || '24px';
    const fontWeight = options.fontWeight || 'normal';
    const fontStyle = options.fontStyle || 'normal';
    const fontFamily = options.fontFamily || 'monospace';

    let typewriter;
    if (targetElementId) {
        typewriter = document.getElementById(targetElementId);
    } else if (targetElementClass) {
        typewriter = document.querySelector('.' + targetElementClass);
    } else {
        typewriter = document.getElementById('typewriter');
    }

    if (!typewriter) {
        console.error("Target element not found.");
        return;
    }

    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '|';
    typewriter.appendChild(cursor);

    let sentenceIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex <= sentences[sentenceIndex].length) {
            typewriter.textContent = sentences[sentenceIndex].substring(0, charIndex);
            typewriter.appendChild(cursor);
            charIndex++;
            setTimeout(type, typingSpeed); // Adjust the typing speed here
        } else {
            setTimeout(erase, delayBeforeErasing); // Adjust the delay before erasing here
        }
    }

    function erase() {
        if (charIndex >= 0) {
            typewriter.textContent = sentences[sentenceIndex].substring(0, charIndex);
            typewriter.appendChild(cursor);
            charIndex--;
            setTimeout(erase, eraseSpeed); // Adjust the erasing speed here
        } else {
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            charIndex = 0;
            setTimeout(type, delayBeforeTypingNext); // Adjust the delay before typing next sentence here
        }
    }

    typewriter.style.color = textColor;
    typewriter.style.fontSize = fontSize;
    typewriter.style.fontWeight = fontWeight;
    typewriter.style.fontStyle = fontStyle;
    typewriter.style.fontFamily = fontFamily;

    type();
}

// Parse options from script tag attributes
const script = document.currentScript;
const sentences = JSON.parse(script.getAttribute('sentences')) || [];
const color = script.getAttribute('color') || 'black';
const typingSpeed = parseInt(script.getAttribute('typingSpeed')) || 100;
const eraseSpeed = parseInt(script.getAttribute('eraseSpeed')) || 50;
const delayBeforeErasing = parseInt(script.getAttribute('delayBeforeErasing')) || 1500;
const delayBeforeTypingNext = parseInt(script.getAttribute('delayBeforeTypingNext')) || 500;
const fontSize = script.getAttribute('fontSize') || '24px';
const fontWeight = script.getAttribute('fontWeight') || 'normal';
const fontStyle = script.getAttribute('fontStyle') || 'normal';
const fontFamily = script.getAttribute('fontFamily') || 'monospace';
const targetElementId = script.getAttribute('targetElementId');
const targetElementClass = script.getAttribute('targetElementClass');

// Initialize typewriter with parsed options
initTypewriter({
    sentences: sentences,
    color: color,
    typingSpeed: typingSpeed,
    eraseSpeed: eraseSpeed,
    delayBeforeErasing: delayBeforeErasing,
    delayBeforeTypingNext: delayBeforeTypingNext,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    fontFamily: fontFamily,
    targetElementId: targetElementId,
    targetElementClass: targetElementClass
});
