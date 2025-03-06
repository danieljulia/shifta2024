
/**
 * instrucciones para integrar la api en
 * https://replicate.com/black-forest-labs/flux-schnell/api
 * 
 */
import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "black forest gateau cake spelling out the words \"FLUX SCHNELL\", tasty, food photography, dynamic shot"
};

const output = await replicate.run("black-forest-labs/flux-schnell", { input });

import { writeFile } from "node:fs/promises";
for (const [index, item] of Object.entries(output)) {
  await writeFile(`output_${index}.webp`, item);
}
//=> output_0.webp written to disk