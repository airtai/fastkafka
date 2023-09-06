from propan import PropanApp, RedisBroker, Depends

broker = RedisBroker("redis://localhost:6379")
app = FastStream(broker)

def another_dependency():
    return 1

def simple_dependency(b: int = Depends(another_dependency)): # (1)
    return b * 2

@broker.handle("test")
async def handler(
    body: dict,
    a: int = Depends(another_dependency),
    b: int = Depends(simple_dependency)):
    assert (a + b) == 3