def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError('strands must be of equal length and non-empty')
    return len([x for x, y in zip(strand_a, strand_b) if x != y])
