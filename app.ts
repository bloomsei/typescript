export {};

let messages: string[] = ['Hello', 'baby', 'world! '];

function awesome(message: string, repeat: number): string {
  return message.repeat(repeat);
}

function notAwesome(message: string): string {
    return message;
}

console.log(notAwesome(messages.join(' ')));
console.log(awesome(messages.join(' '), 3));
