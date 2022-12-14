export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error(
        'Content length must be greater or equal to 5 and less or equal to 250',
      );
    }

    this.content = content;
  }

  public get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 250;
  }
}
