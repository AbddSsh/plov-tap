import compose from "compose-function";

import { withTheme } from "./theme";
import { withStore } from "./store";

export const withProviders = compose(withTheme, withStore);
