# BB-Util
Software pro vylepšení prostředí, na kterém poběží monitorovací panel pro Babybox.

## Vylepšení
- Spuštění monitorovacího panelu po startu počítače a kontroly, že se monitorovací panel nespustí vícekrát
- Restartování počítače po ztrátě spojením s babyboxem

## Instalace
1. https://nodejs.org/en/download/ - stáhnout windows verzi
2. https://git-scm.com/downloads/ - stáhnout pomocí tlačítka vpravo
- Obě dvě věci nainstalovat - stačí pořád mačkat `next`, není potřeba nic přenastavovat
3. Otevřít prohlížeč souborů a dostat se na `C:\` (nebo tam, kde by měl být program umístěn)

    1. Otevřít **Git Bash** - pravé tlačítko myši => `Open Git Bash Here`

    2. Stáhnout program **BB-Util** - `git clone https://github.com/zbyju/bb-util.git`

- Pokračovat buď manuálně, nebo automaticky:

### Automatická instalace
1. Otevřít soubor `install.bat`
2. Zkontrolovat, že byl vytvořen soubor s názvem **Babybox** na ploše
3. Zkontrolovat, že byl vytvořen soubor s názvem **Babybox** ve složce `shell:startup` (Složku otevřít pomocí Start => Spustit => shell:startup)

### Manuální instalace
1. Nainstalovat **pm2** - `npm install -g pm2`
2. Otevřít Git Bash ve složce `bb-util/server` (Navigovat do složky => Pravé tlačítko => Open Git Bash Here)

    1. Nainstalovat závislosti - `npm install`

3. Otevřít Git Bash ve složce `bb-util/client` (Navigovat do složky => Pravé tlačítko => Open Git Bash Here)

    1. Nainstalovat závislosti - `npm install`

## Po instalaci
1. Při prvním spuštění je potřeba povolit pravidlo Firewallu, na které se program sám dotáže při prvním spuštění. Toto okno stačí potvrdit.
2. Pro úspěšné použití pro starý program je potřeba přepsat proměnnou `J3` v `index.html` na hodnotu: `"http://localhost:3000/server/babybox?time="`
