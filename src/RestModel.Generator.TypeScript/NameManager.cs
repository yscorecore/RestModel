using System.Collections.Concurrent;

namespace RestModel.Generator.TypeScript
{
    public class NameManager : INameManager
    {
        private HashSet<string> _names = new HashSet<string>();
        public string Request(string name)
        {
            lock (_names)
            {
                if (_names.Contains(name))
                {
                    int index = 2;
                    do
                    {
                        var newName = $"{name}{index}";
                        if (!_names.Contains(newName))
                        {
                            _names.Add(newName);
                            return newName;
                        }
                        else
                        {
                            index++;
                        }

                    } while (true);

                }
                else
                {
                    _names.Add(name);
                    return name;
                }
            }
        }
    }
}
