#include <iostream>

#include <string.h>

#include <bits/stdc++.h>

using namespace std;

int main()
{
    char s[50];
    cout << "Matn kiriting : " << endl;
    cin >> s;
    int len = strlen(s);
    cout << s << endl;
    for (int i = 0; i < len; i++)
    {
        if (s[i] == "a" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "e")
        {
            s[i] = "&";
        }
    }
    cout << s << endl;

    return 0;
}