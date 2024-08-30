import { isStatusSuccess, Status } from './.deps.ts';

export function sampleFunction(name: string, status: Status): string {
  const success = isStatusSuccess(status);

  return `hello ${name}: ${success}`;
}
