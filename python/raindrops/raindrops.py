MODULO_MAPPER = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong'
}


def convert(number):
    answer = ''

    for k, v in MODULO_MAPPER.items():
        if number % k == 0:
            answer += v
    if not answer:
        answer = str(number)

    return answer
