def calcul(a,b,operator):
    result = 0
    if operator == 'add':
        result = a + b
    if operator == 'sub':
        result = a - b
    if operator == 'mul':
        result = a * b
    if operator == 'div':
        result = a / b
    return result
kq = calcul(100,500,'add')

print(f"result is {kq}")