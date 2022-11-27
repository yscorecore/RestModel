using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System
{
    public static class StringExtensions
    {
        public static bool IsMatchWildcard(this string input, string pattern, StringComparison stringcomparison = StringComparison.CurrentCulture)
        {//http://www.codeproject.com/Articles/1088/Wildcard-string-compare-globbing

            if (input == null) throw new ArgumentNullException("input");
            if (input == null) throw new ArgumentNullException("pattern");
            int inputIndex = 0;
            int patternIndex = 0;

            //无通配符 * 时，比较算法（）
            while (inputIndex < input.Length && patternIndex < pattern.Length && (pattern[patternIndex] != '*'))
            {
                //if ((pattern[patternIndex] != '?') && (input[inputIndex] != pattern[patternIndex]))
                if ((pattern[patternIndex] != '?') && !string.Equals(input.Substring(inputIndex, 1), pattern.Substring(patternIndex, 1), stringcomparison))
                {//如果模式字符不是通配符，且输入字符与模式字符不相等，则可判定整个输入字串与模式不匹配
                    return false;
                }
                patternIndex++;
                inputIndex++;
                if (patternIndex == pattern.Length && inputIndex < input.Length)
                {
                    return false;
                }
                if (inputIndex == input.Length && patternIndex < pattern.Length)
                {
                    return false;
                }
                if (patternIndex == pattern.Length && inputIndex == input.Length)
                {
                    return true;
                }
            }
            //有通配符 * 时，比较算法
            int mp = 0;
            int cp = 0;
            while (inputIndex < input.Length)
            {
                if (patternIndex < pattern.Length && pattern[patternIndex] == '*')
                {
                    if (++patternIndex >= pattern.Length)
                    {
                        return true;
                    }
                    mp = patternIndex;
                    cp = inputIndex + 1;
                }
                //else if (patternIndex < pattern.Length && ((pattern[patternIndex] == input[inputIndex]) || (pattern[patternIndex] == '?')))
                else if (patternIndex < pattern.Length && (string.Equals(input.Substring(inputIndex, 1), pattern.Substring(patternIndex, 1), stringcomparison) || (pattern[patternIndex] == '?')))
                {
                    patternIndex++;
                    inputIndex++;
                }
                else
                {
                    patternIndex = mp;
                    inputIndex = cp++;
                }
            }
            //当输入字符为空且模式为*时
            while (patternIndex < pattern.Length && pattern[patternIndex] == '*')
            {
                patternIndex++;
            }
            return patternIndex >= pattern.Length ? true : false;

        }//end mehtod
        /// <summary>
        /// 判断字符串是否匹配多个模式中的任意一个
        /// </summary>
        /// <param name="input"></param>
        /// <param name="patterns"></param>
        /// <param name="stringcomparison"></param>
        /// <returns></returns>
        public static bool IsMatchWildcardAnyOne(this string input, IEnumerable<string> patterns, StringComparison stringcomparison = StringComparison.CurrentCulture)
        {
            if (patterns == null) return false;
            foreach (var pattern in patterns)
            {
                var res = IsMatchWildcard(input, pattern, stringcomparison);
                if (res) return true;
            }
            return false;
        }
    }
}
