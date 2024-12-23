import '@testing-library/jest-dom'

import { TextEncoder, TextDecoder as NodeTextDecoder } from "util";

// Gán và ép kiểu
global.TextEncoder = TextEncoder;
global.TextDecoder = NodeTextDecoder as unknown as typeof global.TextDecoder;
