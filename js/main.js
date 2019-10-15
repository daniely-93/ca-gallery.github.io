var gProjects = createProjects();

function createProjects() {
    return [
        createProject(
            'Touch Nums', 
            'Touch all the numbers as fast as you can!', 
            'https://i.imgur.com/18fuXjQ.png',
            `Touch the numbers from 1 to 9/16/25/36/49 as fast as you can, and become a world record holder!
            "Touch Nums" is a simple game for training your reflexes and peripheral vision.
            Peripheral vision is an essential skill for playing baseball, football, basketball, and various sports.
            To achieve a high score, try to use your peripheral vision, rather than focusing only on one spot.`,
            new Date(1568489237000),
            'Window',
            ['Game'],
            'https://daniely-93.github.io/touch-nums.github.io/'
        ),
        createProject(
            'Pacman', 
            'Eat all the food without getting caught!', 
            'https://i.imgur.com/uvyTLbU.png',
            `Enjoy the world famous arcade videogame, PAC-MAN, for FREE!
             Earn high scores as you guide PAC-MAN through the maze to eat
             all the pac-dots and fruits while avoiding the pesky Ghost Gang!
             Or turn them blue by eating a power pellet to chomp on them!`,
            new Date(1568567145000),
            'Window',
            ['Matrixes', 'Keyboard Events'],
            'https://daniely-93.github.io/pacman.github.io/'
        ),
        createProject(
            'Mine Sweeper', 
            'Eat all the food without getting caught!', 
            'https://i.imgur.com/qIlOCkT.png',
            `The goal of the game is to uncover all the squares that do not contain mines.
            To mark a mine press the right click. Minesweeper classic free game. is one of the most interesting logic games.`,
            new Date(1569086081000),
            'Window',
            ['Matrixes', 'Mouse Events'],
            'https://daniely-93.github.io/mine-sweeper.github.io/'
        )
    ]
}

function createProject(name, intro, imgUrl, desc, date, client, labels, url) {
    return {
        name,
        intro,
        imgUrl,
        desc,
        date,
        client,
        labels,
        url
    }
}

function getProjects() {
    return gProjects;
}

function getProject(index) {
    return gProjects[index];
}