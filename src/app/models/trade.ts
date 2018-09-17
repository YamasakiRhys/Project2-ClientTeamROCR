export class Trade {
    trade_id?: number;
    user_id?: number;
    game_title?: string;
    genre?: string;
    plot?: string;
    img?: string;
    genrePref?: string;
    status?: string;

    constructor(
        trade_id?: number,
        user_id?: number,
        game_title?: string,
        genre?: string,
        plot?: string,
        img?: string,
        genrePref?: string,
        status?: string) {
        this.trade_id = trade_id;
        this.user_id = user_id;
        this.game_title = game_title;
        this.genre = genre;
        this.plot = plot;
        this.img = img;
        this.genrePref = genrePref;
        this.status = status;

    }
}