# Movies

Replace this readme with your own information about the project. You can include things like:

- Brief description of the assignment
- How you approached the task, what tools and techniques you used, and how you planned it
- If you had more time, what would be next?
- How to run the project locally

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

Jag började med att be ChatGPT skapa grunden till projektet. Efter att ha justerat några problem blev resultatet en sida med tre komponenter. Jag fick testa göra ganska många roliga saker som jag inte testat tidigare, exempelvis betygssystemet med stjärnor.

Då referenssidan för layout inte fungerade så fick jag lösa en egen layout som jag tyckte passade.

Ett problem med sidan jag har upptäckt och som jag inte har kunnat lösa är att när förstasidan laddas första gången så blinkar bakgrunden vitt när fade-effekten börjar. Problemet verkar försvinna efter att man låtit sidan spela upp alla bilder en gång, så jag antar att det har att göra med att det tar tid att ladda bilderna. Går detta att åtgärda på något sätt?

https://topfilmsite.netlify.app/
