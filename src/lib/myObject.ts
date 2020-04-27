
import { myObject } from ".";

import { assert } from "evt/dist/tools/typeSafety";
import * as inDepth from "evt/dist/tools/inDepth";

assert(inDepth.same(myObject, { "p": "foo" }));



