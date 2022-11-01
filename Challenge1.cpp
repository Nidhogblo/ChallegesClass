#include <iostream>
using namespace std;

void function(int x1, int y1, int x2, int y2) {
    int  x = x1;
    int  y = y1;
    int z = 0;

    int dy = (y2 - y1);
    int dx = (x2 - x1);

    int p =  dy - dx;
    
        while (x < x2)
        {
            if (p >= 0) {
                cout << x << "," << y << endl;
                y = y + 1;
                p = p +  dy -  dx;
            }
            else {
                cout << x << "," << y << endl;
                p = p +  dy;
            }
            x = x + 1;
        }

        while (y < y2)
        {
            if (p >= 0) {
                cout << x << "," << y << endl;
                y = y + 1;
                p = p + dy - dx;
            }
            else {
                cout << x << "," << y << endl;
                p = p +  dy;
            }
            x = x + 1;
        }
       
    
}



int main() {
    int x0 = 0;
    int y0 = 3;
    int x1 = 5;
    int y1 = 5;

    function(x0,y0,x1,y1);
    cout << x1 <<","<<y1;

}
  


