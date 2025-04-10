document.addEventListener('DOMContentLoaded', function() {
  const terminal = document.getElementById('terminal');
  if (!terminal) return;

  const commands = [
    { text: "Welcome to Adnan Sami Bhuiyan's portfolio", delay: 0 },
    { text: "> whoami", delay: 1000 },
    { text: "Cyber Security Researcher | AI Enthusiast | Ethical Hacker", delay: 1500, type: true },
    { text: "> skills --list", delay: 2500 },
    { text: "• Ethical Hacking • Penetration Testing • Machine Learning", delay: 3000, type: true },
    { text: "• Python • Cybersecurity • AI Development • Cryptography", delay: 3500, type: true },
    { text: "> contact --info", delay: 4500 },
    { text: "Feel free to reach out via the contact form below!", delay: 5000, type: true },
    { text: "> _", delay: 6000, blink: true }
  ];

  let currentCommand = 0;
  
  function typeWriter(text, element, speed, callback) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }

  function processCommand() {
    if (currentCommand >= commands.length) return;
    
    const cmd = commands[currentCommand];
    
    if (cmd.text === "> _") {
      // Create blinking cursor effect
      terminal.innerHTML = '> <span class="cursor-blink">_</span>';
      const cursor = terminal.querySelector('.cursor-blink');
      setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
      }, 500);
      return;
    }
    
    if (cmd.type) {
      terminal.innerHTML += '> ';
      typeWriter(cmd.text, terminal, 50, () => {
        terminal.innerHTML += '<br>';
        currentCommand++;
        setTimeout(processCommand, commands[currentCommand]?.delay || 0);
      });
    } else {
      terminal.innerHTML += cmd.text + '<br>';
      currentCommand++;
      setTimeout(processCommand, commands[currentCommand]?.delay || 0);
    }
  }

  // Start the terminal animation
  setTimeout(processCommand, 500);
});
