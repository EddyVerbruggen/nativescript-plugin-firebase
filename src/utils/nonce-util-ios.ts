const CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._";

export function getNonce(length: number): string {
  let text = "";
  for (let i = 0; i < length; i++) {
    text += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
  }
  return text;
}

export function Sha256(input: string): string {
  const nsStr: NSString = NSString.stringWithString(input);
  const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
  const hash: NSMutableData = NSMutableData.dataWithLength(32);

  CC_SHA256(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

  const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 32);

  return _Format(data);
}

function _Format(data: NSData): string {
  const buffer: ArrayBuffer = interop.bufferFromData(data);
  const view: Uint8Array = new Uint8Array(buffer);

  let result: string = "";
  for (let i = 0; i !== data.length; ++i) {
    let tmp: string = view[i].toString(16);
    if (tmp.length === 1) {
      result += "0";
    }
    result += tmp;
  }
  return result;
}