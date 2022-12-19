import English from "./en"
import Frensh from "./fr";
import Kinyarwanda from "./rw"

export const Locales={
    "english":'en-us',
    "ikinyarwanda":'rw',
    "frensh":'fr'
}
const Messages={
   [Locales.english]:English,
   [Locales.frensh]:Frensh,
   [Locales.ikinyarwanda]:Kinyarwanda
}
export default Messages;