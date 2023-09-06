from propan import Depends, apply_types

def simple_dependency(a: int, b: int = 3):
    return a + b

@apply_types
def method(a: int, d: int = Depends(simple_dependency)):
    return a + d

assert method("1") == 5