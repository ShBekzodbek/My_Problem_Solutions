/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution
{
public:
    int minDeletionSize(vector<string> &strs)
    {
        int count = 0;
        for (int i = 0; i < strs[0].size(); i++)
        {
            for (int j = 0; j < strs.size() - 1; j++)
            {
                if (strs[j][i] > strs[j + 1][i])
                {
                    count++;
                    break;
                }
            }
        }
        return count;
    }
};

int main()
{
    Solution s;
    std::vector<string> text = {"aak", "bbs", "dcy", "cdm"};
    int result = s.minDeletionSize(text);
    cout << "Result : " << result << endl;
}
