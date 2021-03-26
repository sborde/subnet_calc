
function dec2bin(number) {
    let result = ''
    for (let i = 0 ; i < 8 ; i++) {
        if (number > 0) {
            result = (number%2) + result;
            number >>= 1;
        } else {
            result = '0' + result;
        }
    }
    return result;
}

function ip2bin(octets) {
    let result = '';
    for (let i = 0 ; i < 4 ; i++) {
        result += dec2bin(octets[i]);
        if (i < 4) {
            result += ' ';
        }
    }
    return result;
}

function getOctet(number, octetOrd) {
    let toShift = (4 - octetOrd) * 8;
    let octet = number >> toShift;
    return octet;
}

function octetsToInt(octets) {
    let binary = 0;
    for (let i = 0 ; i < 4 ; i++) {
        let octet = octets[i];
        binary = binary | octet<<((3-i)*8);
    }
    console.log(binary);
    return binary;
}

let number = 32;

console.log(ip2bin([192, 168, 0, 0]));

console.log(ip2bin([255, 255, 255, 0]));