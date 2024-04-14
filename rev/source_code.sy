const int V = 4;
const int space = 32;
const int LF = 10;

void printSolution(int color[]) {
}

void printMessage() {
}

int isSafe(int graph[][V], int color[]) {
}

int graphColoring(int graph[][V], int m, int i, int color[]) {
  if (i == V) {
    if (isSafe(graph, color)) {
      printSolution(color);
      return 1;
    }
    return 0;
  }
  int j = 1;
  while (j <= m) {
    color[i] = j;
    if (graphColoring(graph, m, i + 1, color))
      return 1;
    color[i] = 0;
    j = j + 1;
  }
  return 0;
}

int main() {
  return 0;
}
