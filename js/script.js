{
    const tasks = [
        {
            content: "zrobić obiad",
            done: false,
        },
        {
            content: "umyć naczynia",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
              ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const welcome = () => {
        console.log("Cześć!");
    };

    const init = () => {
        render();
        welcome();
    };

    init();
}