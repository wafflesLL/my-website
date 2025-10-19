import { z } from "zod";

const IconSchema = z.object({
});

export type IconRecord = z.infer<typeof IconSchema>; 
