function createMatrixBackground() {
            const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
            const container = document.getElementById('matrixBg');
            const fontSize = 16;
            const columns = Math.floor(window.innerWidth / fontSize);
            const rows = Math.floor(window.innerHeight / fontSize);
            
            for (let i = 0; i < columns; i++) {
                const delay = Math.random() * 5;
                const duration = 5 + Math.random() * 10;
                const charCount = 5 + Math.floor(Math.random() * 10);
                
                for (let j = 0; j < charCount; j++) {
                    const char = document.createElement('div');
                    char.className = 'matrix-char';
                    char.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
                    char.style.left = `${i * fontSize}px`;
                    char.style.animationDelay = `${delay + (j * 0.2)}s`;
                    char.style.animationDuration = `${duration - (j * 0.5)}s`;
                    char.style.opacity = `${1 - (j * 0.1)}`;
                    container.appendChild(char);
                }
            }
        }
        
        // Interactive terminal
        function setupTerminal() {
            const terminalInput = document.getElementById('terminalInput');
            const terminalOutput = document.getElementById('terminalOutput');
            
            const commands = {
                help: {
                    description: "Show available commands",
                    execute: () => {
                        return `
Available commands:
<span class="text-green-400">help</span>       - Show this help message
<span class="text-green-400">clear</span>      - Clear the terminal
<span class="text-green-400">contact</span>    - Show contact information
<span class="text-green-400">whoami</span>     - Show information about Kamrul
<span class="text-green-400">scan</span>       - Run a vulnerability scan demo
<span class="text-green-400">education</span>  - Show educational background
<span class="text-green-400">experience</span> - Show professional experience
<span class="text-green-400">skills</span>     - Show technical skills
<span class="text-green-400">projects</span>   - Show notable projects
<span class="text-green-400">exit</span>       - Close the terminal
                        `;
                    }
                },
                clear: {
                    description: "Clear the terminal",
                    execute: () => {
                        terminalOutput.innerHTML = `
                            <div class="command-line flex items-start">
                                <span class="prompt mr-2">user@kamrul-terminal:~$</span>
                                <input type="text" id="terminalInput" class="bg-transparent text-white flex-grow outline-none" autocomplete="off" spellcheck="false">
                                <span class="blink">_</span>
                            </div>
                        `;
                        setupTerminal();
                        return "";
                    }
                },
                contact: {
                    description: "Show contact information",
                    execute: () => {
                        return `
Contact Information:
<span class="text-green-400">Email:</span> kh11092000@gmail.com
<span class="text-green-400">WhatsApp/Mobile:</span> +880 1865-613145
<span class="text-green-400">Messenger:</span> Kamrul Hossain
<span class="text-green-400">Location:</span> Feni, Bangladesh

For more details, visit the <a href="#contact" class="text-blue-400 underline">contact section</a> of the website.
                        `;
                    }
                },
                whoami: {
                    description: "Show information about Kamrul",
                    execute: () => {
                        return `
Kamrul Hossain - Cybersecurity Specialist
----------------------------------------
<span class="text-green-400">About:</span> A dedicated engineering student from Bangladesh, deeply immersed in computer science and technology with a passion for cybersecurity and ethical hacking.
<span class="text-green-400">Education:</span> BSc in CSE (ongoing), Diploma in Computer Engineering
<span class="text-green-400">Experience:</span> Founder of CYBER LAVA, Computer Troubleshooting Expert, Former Junior Assistant System Engineer
<span class="text-green-400">Skills:</span> Ethical Hacking, Web Development, System Administration
<span class="text-green-400">Projects:</span> Microsoft Activation Scripts (MAS), CYBER LAVA Security Suite

Type 'help' to see available commands.
                        `;
                    }
                },
                education: {
                    description: "Show educational background",
                    execute: () => {
                        return `
Educational Background:
<span class="text-green-400">1. Bachelor of Science in Computer Science and Engineering</span> (2023 – Present)
Currently pursuing undergraduate degree focusing on computer science and engineering.

<span class="text-green-400">2. Diploma in Computer Engineering</span> (2018 – 2021)
Completed diploma laying a solid foundation in computer engineering principles.

<span class="text-green-400">3. Secondary School Certificate</span> (Completed in 2017)
Achieved with a commendable 65% marks.
                        `;
                    }
                },
                experience: {
                    description: "Show professional experience",
                    execute: () => {
                        return `
Professional Experience:
<span class="text-green-400">1. Founder & Owner at CYBER LAVA</span>
Established CYBER LAVA, showcasing entrepreneurial spirit and commitment to cybersecurity solutions.

<span class="text-green-400">2. Expert in Computer Hardware & Software Troubleshooting</span>
Adeptly handles hardware installations, troubleshooting, and system optimizations.

<span class="text-green-400">3. Former Junior Assistant System Engineer at InComIT Solution</span>
Honed skills in system engineering and IT solutions during this professional role.
                        `;
                    }
                },
                skills: {
                    description: "Show technical skills",
                    execute: () => {
                        return `
Technical Skills:
<span class="text-green-400">Programming & Web Development:</span> HTML, CSS, Python, JavaScript
<span class="text-green-400">Cybersecurity Expertise:</span> Ethical Hacking, Vulnerability Assessment
<span class="text-green-400">System Administration:</span> CPanel, WHM, WHMCS, Email Server Solutions
<span class="text-green-400">Other Skills:</span> Computer Hardware Troubleshooting, Network Security
                        `;
                    }
                },
                projects: {
                    description: "Show notable projects",
                    execute: () => {
                        return `
Notable Projects:
<span class="text-green-400">1. Microsoft Activation Scripts (MAS)</span>
An open-source project on GitHub that utilizes various activation methods for Windows and Office.

<span class="text-green-400">2. CYBER LAVA Security Suite</span>
A comprehensive cybersecurity solution package developed for small businesses.

Visit the <a href="#projects" class="text-blue-400 underline">projects section</a> for more details.
                        `;
                    }
                },
                scan: {
                    description: "Run a vulnerability scan demo",
                    execute: () => {
                        const vulns = [
                            {name: "SQL Injection", severity: "high", type: "web"},
                            {name: "XSS Vulnerability", severity: "medium", type: "web"},
                            {name: "CSRF Protection Missing", severity: "medium", type: "web"},
                            {name: "Outdated jQuery (1.11.1)", severity: "low", type: "js"},
                            {name: "Missing Security Headers", severity: "medium", type: "server"},
                            {name: "Sensitive Data Exposure", severity: "high", type: "api"}
                        ];
                        
                        let output = `
Initiating AI vulnerability scan...
<div class="relative h-4 bg-gray-800 rounded overflow-hidden my-2">
    <div class="absolute h-full bg-gradient-to-r from-green-400 to-blue-500" style="width: 100%;"></div>
    <div class="absolute h-full w-full scan-animation" style="background: rgba(255,255,255,0.1);"></div>
</div>
Scan complete. Found ${vulns.length} potential vulnerabilities:
<div class="mt-2 ml-4">`;
                        
                        vulns.forEach(vuln => {
                            const color = vuln.severity === "high" ? "text-red-400" : 
                                         vuln.severity === "medium" ? "text-yellow-400" : "text-gray-400";
                            output += `<div class="${color}">[!] ${vuln.name} (${vuln.severity}) detected in ${vuln.type}</div>`;
                        });
                        
                        output += `</div>
<div class="mt-2">This is a simulation. For real vulnerability assessment, contact Kamrul.</div>`;
                        
                        return output;
                    }
                },
                exit: {
                    description: "Close the terminal",
                    execute: () => {
                        document.getElementById('terminalSection').scrollIntoView();
                        return "Type 'clear' to restart the terminal";
                    }
                }
            };
            
            terminalInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const command = terminalInput.value.trim().toLowerCase();
                    terminalInput.value = '';
                    
                    // Create new command line
                    const newCommandLine = document.createElement('div');
                    newCommandLine.className = 'command-line mb-2';
                    newCommandLine.innerHTML = `<span class="prompt">user@kamrul-terminal:~$</span> <span class="text-white">${command}</span>`;
                    
                    // Create output div
                    const outputDiv = document.createElement('div');
                    outputDiv.className = 'command-output mb-4';
                    
                    // Process command
                    if (commands[command]) {
                        outputDiv.innerHTML = commands[command].execute();
                    } else if (command) {
                        outputDiv.innerHTML = `<span class="text-red-400">Command not found: ${command}</span><br>Type 'help' for available commands.`;
                    }
                    
                    // Insert before the input line
                    const inputLine = terminalOutput.querySelector('.command-line');
                    terminalOutput.insertBefore(newCommandLine, inputLine);
                    terminalOutput.insertBefore(outputDiv, inputLine);
                    
                    // Scroll to bottom
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                }
            });
            
            terminalInput.focus();
        }
        
        // 3D Globe Visualization
        function createGlobe() {
            const globeContainer = document.getElementById('globeViz');
            
            // Generate random attack data
            const N = 30;
            const gData = [...Array(N).keys()].map(() => ({
                lat: (Math.random() - 0.5) * 180,
                lng: (Math.random() - 0.5) * 360,
                size: Math.random() / 3,
                color: ['red', 'yellow', 'white'][Math.round(Math.random() * 2)]
            }));
            
            // Create globe with Bangladesh highlighted
            const globe = Globe()
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
                .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .showAtmosphere(true)
                .atmosphereColor('rgba(0, 255, 157, 0.2)')
                .atmosphereAltitude(0.2)
                .pointsData([
                    ...gData,
                    { lat: 23.6850, lng: 90.3563, size: 0.2, color: 'green' } // Bangladesh
                ])
                .pointAltitude(0.01)
                .pointColor('color')
                .pointRadius('size')
                .pointResolution(8)
                (globeContainer);
            
            // Add attack arcs focusing on Bangladesh
            const arcsData = [];
            for (let i = 0; i < 15; i++) {
                arcsData.push({
                    startLat: gData[Math.floor(Math.random() * N)].lat,
                    startLng: gData[Math.floor(Math.random() * N)].lng,
                    endLat: 23.6850, // Bangladesh
                    endLng: 90.3563,
                    color: ['red', 'yellow', 'white'][Math.floor(Math.random() * 3)]
                });
            }
            
            globe.arcsData(arcsData)
                .arcColor('color')
                .arcDashLength(0.4)
                .arcDashGap(0.1)
                .arcDashAnimateTime(2000)
                .arcStroke(0.5);
            
            // Auto-rotate
            globe.controls().autoRotate = true;
            globe.controls().autoRotateSpeed = 0.5;
            
            // Resize handler
            window.addEventListener('resize', () => {
                globe.width(globeContainer.clientWidth);
                globe.height(globeContainer.clientHeight);
            });
        }
        
        // Scroll to terminal
        function showTerminal() {
            document.getElementById('terminalSection').scrollIntoView({ behavior: 'smooth' });
            document.getElementById('terminalInput').focus();
        }
        
        // Initialize everything
        document.addEventListener('DOMContentLoaded', function() {
            createMatrixBackground();
            setupTerminal();
            createGlobe();
        });
