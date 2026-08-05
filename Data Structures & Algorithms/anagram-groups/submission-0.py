from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        
        for word in strs:
            sorted_key = "".join(sorted(word))
            groups[sorted_key].append(word)
            
        return list(groups.values())