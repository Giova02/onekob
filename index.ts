import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Black car",
    description: "black car follow mouse (ehehheh)",
    authors: [Devs.Nulled],

    start() {
        fetch("https://raw.githubusercontent.com/Giova02/onekob/refs/heads/main/onekob.js?token=GHSAT0AAAAAAC3P6PVFL27QQCDSEB72HRYWZ2R2A7A")
            .then(x => x.text())
            .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/Giova02/onekob/refs/heads/main/onekob.gif")
                .replace("(isReducedMotion)", "(false)"))
            .then(eval);
    },

    stop() {
        document.getElementById("onekob")?.remove();
    }
});
