export function maskPhoneNumber(phoneNumber: string) {
  // 정규식 사용: 앞 다섯 자리와 나머지 부분을 그룹으로 나눔
  return phoneNumber.replace(/(\d{3})(\d{2})(\d{2})(\d{4})/, "$1-$2**-****");
}

export function formatPhoneNumber(input: string) {
  // 입력 문자열에서 숫자만 추출
  let digits = input.replace(/\D/g, "");

  // 숫자가 11자리가 초과하면 11자리까지만 사용
  if (digits.length > 11) {
    digits = digits.substring(0, 11);
  }

  // 11자리 숫자인 경우 형식에 맞게 변환
  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  } else {
    return digits;
  }
}
