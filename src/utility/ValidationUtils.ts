/**
 * 一般的なTypeScriptで使用されるバリデーションのクラスs
 */
class ValidationUtils {
  /****************************
   * 単項目
   ***************************
   */

  /**
   * 数値であるかどうかを判定するための関数
   * number型の数値とNaNの場合にtrueを返す
   * 文字列の数字やnull, undefinedでfalse
   * @param value
   */
  public static isTypeOfNumber(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return false;
    }
    return true;
  }

  /**
   * 数値であるかどうかを判定するための関数
   * number型の数値の場合のみtrueを返す
   * 文字列の数字やnull, undefined, NaNでfalse
   * @param value
   */
  public static isNumber(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return false;
    }
    return !isNaN(value);
  }

  /**
   * 値がnullであるかどうかをはんていするための関数
   * nullならtrueを返す
   * undefinedやNaN、 空文字、空のリストなどはfalse
   * @param value
   */
  public static isNull(value: any): boolean {
    return value === null;
  }

  /**
   * 値がundefinedであるかどうかをはんていするための関数
   * undefinedの場合のみtrueを返す
   * nullやNaN、 空文字、空のリストなどはfalse
   * @param value
   */
  public static isUndefined(value: any): boolean {
    return value === undefined;
  }

  /**
   * 値がNaNであるかどうかを判定するための関数
   * undefinedの場合のみtrueを返す
   * nullやNaN、 空文字、空のリストなどはfalse
   * @param value
   */
  public static isNaN(value: any): boolean {
    return isNaN(value);
  }

  /***************************
   * 配列に関するバリデーション
   ****************************
   * /
  /**
   * 配列が空であるかどうかの判定
   * 配列が[]である場合のみtrue
   * @param arry
   */
  public  static isEmpty(array: any[]): boolean {
    return array.length === 0;
  }

  /**
   * 引数が配列であるかどうかの判定
   * @param value
   */
  public static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /********************
   * 複合系バリデーション
   ********************
   */
  /**
   * 値をもっているかどうかを判定するための関数
   * null, undefined, NaN, でfalse
   * @param value
   *
   */
  public static haveValue(value: any): boolean {
    if (this.isNull(value)) {
      return false;
    }
    if (this.isNaN(value)) {
      return false;
    }
    if (this.isUndefined(value)) {
      return false;
    }
    return true;
  }

  // TODO:  命名が微妙
  /**
   * 文字列が空でないことを判定するための関数
   * 空文字、null, undefined, の場合はfalse
   * @param value
   */
  public static isStringWithoutEmpty(value: any): boolean {
    if (!this.haveValue(value)) {
      return false;
    }
    if (value === '') {
      return false;
    }
    return true;
  }
}

export default ValidationUtils;
