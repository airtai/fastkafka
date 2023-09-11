from faststream import apply_types
from faststream.annotations import NoCast


def test_no_cast():
    @apply_types
    def handler(s: NoCast[str]):
        assert isinstance(s, int)

    handler(1)
