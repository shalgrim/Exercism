A_ORD = ord('A')
Z_ORD = ord('Z')

def is_isogram(string):
    seen = set()
    for c in string:
        if A_ORD <= ord(c.upper()) <= Z_ORD:
            if c.upper() in seen:
                return False
            seen.add(c.upper())

    return True
