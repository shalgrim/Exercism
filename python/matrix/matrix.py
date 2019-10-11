class Matrix(object):
    def __init__(self, matrix_string):
        self.rows = matrix_string.split('\n')
        self.rows = [row.split() for row in self.rows]

    def row(self, index):
        return [int(i) for i in self.rows[index-1]]

    def column(self, index):
        return [int(row[index-1]) for row in self.rows]
