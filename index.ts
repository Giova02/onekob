import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "onekob",
    description: "black car follow mouse (ehehheh)",
    authors: [Devs.Nulled],

    start() {
        fetch("C:/Users/Nulle/Documents/Vencord/src/userplugins/onekob/onekob.js")
            .then(x => x.text())
            .then(eval);
    },

    stop() {
        document.getElementById("onekob")?.remove();
    }
});
