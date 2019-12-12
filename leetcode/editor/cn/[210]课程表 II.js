//现在你总共有 n 门课需要选，记为 0 到 n-1。
//
// 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]
//
// 给定课程总量以及它们的先决条件，返回你为了学完所有课程所安排的学习顺序。
//
// 可能会有多个正确的顺序，你只要返回一种就可以了。如果不可能完成所有课程，返回一个空数组。
//
// 示例 1:
//
// 输入: 2, [[1,0]]
//输出: [0,1]
//解释: 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
//
// 示例 2:
//
// 输入: 4, [[1,0],[2,0],[3,1],[3,2]]
//输出: [0,1,2,3] or [0,2,1,3]
//解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
//     因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
//
//
// 说明:
//
//
// 输入的先决条件是由边缘列表表示的图形，而不是邻接矩阵。详情请参见图的表示法。
// 你可以假定输入的先决条件中没有重复的边。
//
//
// 提示:
//
//
// 这个问题相当于查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习。
// 通过 DFS 进行拓扑排序 - 一个关于Coursera的精彩视频教程（21分钟），介绍拓扑排序的基本概念。
//
// 拓扑排序也可以通过 BFS 完成。
//
//
//

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// 拓扑排序（Kahn算法）：
// 定义邻接表、入度表，并初始化每个唯一的节点的邻接链表、入度值
// 遍历节点，将入度值为0的节点入列
// 如果队列不为空，首先将入度为0的节点出列并加到结果集
// 遍历入度为0的邻接链表，将它们的入度值减1
// 如果减后的入度值等于0，则加入队列继续上面的队列循环
// 判断结果集的数量是否等于节点数量，若等，则输出结果集，否则存在环，不能完成学习，输出空

// var findOrder = function(numCourses, prerequisites) {
//   if (numCourses <= 0) {
//     return [];
//   }
//   let graph = new Array(numCourses);
//   for (let i = 0; i < numCourses; i++) {
//     graph[i] = new Set();
//   }
//   let inDegree = new Array(numCourses);
//   inDegree.fill(0)
//   for (let i = 0; i < prerequisites.length; i++) {
//     graph[prerequisites[i][1]].add(prerequisites[i][0]);
//     inDegree[prerequisites[i][0]]++;
//   }
//   let queue = []
//   for (let i = 0; i < numCourses; i++) {
//     if (inDegree[i] == 0) {
//       queue.push(i);
//     }
//   }
//   let res = []
//   while (queue.length) {
//     let inDegreeNode = queue.shift();
//     res.push(inDegreeNode);
//     let nextCourses = graph[inDegreeNode];
//     for (let nextCourse of nextCourses) {
//       inDegree[nextCourse]--;
//       if (inDegree[nextCourse] == 0) {
//         queue.push(nextCourse);
//       }
//     }
//   }
//   if (res.length == numCourses) return res;
//   return [];
// };


// DFS算法
var findOrder = function(numCourses, prerequisites) {
  if (numCourses <= 0) {
    return [];
  }
  let adjs = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    adjs[i] = new Set();
  }
  for (let i = 0; i < prerequisites.length; i++) {
    adjs[prerequisites[i][1]].add(prerequisites[i][0]);
  }
  let visited = new Array(numCourses).fill(false)
  let isLoop = new Array(numCourses).fill(false)
  let stack = []
  for (let i = 0; i < numCourses; i++) {
    if (!topologicalSort(i)) return []
  }
  let index = 0
  let result = []
  while (stack.length) {
    result[index++] = stack.pop()
  }
  return result

  function topologicalSort(v) {
    if (visited[v]) return true
    if (isLoop[v]) return false
    isLoop[v] = true
    for (let u of adjs[v]) {
      if (!topologicalSort(u)) return false
    }
    visited[v] = true
    stack.push(v)
    return true
  }
};

const numCourse = 3
const prerequisites = [[0,1],[0,2],[1,2]]
console.log(findOrder(numCourse, prerequisites));
