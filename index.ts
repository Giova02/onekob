import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "oneko",
    description: "cat follow mouse (real)",
    authors: [Devs.Nulled],

    start() {
        fetch("https://github.com/Giova02/onekob/blob/main/onekob.js")
            .then(x => x.text())
            .then(s => s.replace("./oneko.gif", "https://github.com/Giova02/onekob/blob/main/onekob.gif")
                .replace("(isReducedMotion)", "(false)"))
            .then(eval);
    },

    stop() {
        document.getElementById("oneko")?.remove();
    }
});
