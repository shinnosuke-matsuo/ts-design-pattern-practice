import { Display } from "./display";
import { StringDisplayImpl } from "./display_string_impl";
import { CountDisplay } from "./count_display";

const arg = "Display Test";
const d1 = new Display(new StringDisplayImpl(arg));
const cd = new CountDisplay(new StringDisplayImpl(arg));
d1.display();
cd.multiDisplay(5);
