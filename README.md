# BB-Util
Software pro vylepšení prostředí, na kterém poběží monitorovací panel pro Babybox.

## Vylepšení
- Spuštění monitorovacího panelu po startu počítače a kontroly, že se monitorovací panel nespustí vícekrát
- Restartování počítače po ztrátě spojením s babyboxem

## Instalace
1. https://nodejs.org/en/download/ - stáhnout windows verzi
2. https://git-scm.com/downloads - stáhnout pomocí tlačítka vpravo
3. Obě dvě věci nainstalovat - stačí pořád mačkat `next`, není potřeba nic přenastavovat
4. Do příkazového řádku napsat - `npm install pm2 -g`
5. Na C: disku (nebo tam, kde by měl bb=util být uložen) kliknout pravým a spustit Git Bash (`Git Bas Here`), nebo jakkoliv otevřít Git Bash nebo CMD a dostat se na místo pro uložení pomocí příkazu `cd`
6. Naklonovat tento adresář pomocí příkazu `git clone https://gitlab.com/zbyju/bb-util-v2.git` a následně vyplnit přihlašovací údaje od GitLabu.
7. Pomocí příkazu `cd bb-util-v2` a následně `cd server` pro přesunutí se do složky serveru
8. Nainstalovat potřebné závislosti pomocí `npm install`
9. Pomocí `cd ..` se přesunout zpět a následně pomocí `cd client` se přesunout do složky clientu
10. Nainstalovat potřebné závislosti pomocí`npm install`
11. Pro nastavení spuštění po startu Windows je potřeba jít v průzkumníku do složky `bb-util-v2` a pak pravým na `startup` => `Odeslat` => `Plocha (vytvořit zástupce)`
12. Na ploše pak tento soubor přejmenovat třeba na `Babybox`, aby bylo jasné co to je.
13. Zkopírovat soubor **na ploše** pomocí `CTRL+C`
14. Otevřít start a vyhledat `Spustit`
15. V okně _Spustit_ napsat `shell:startup`. Posléze se otevře okno, kam stačí vložit zkopírovaný soubor z plochy pomocí `CTRL+V`
