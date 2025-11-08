// Tree rendering
export function buildTree(data) {
  const nodes = {};
  Object.keys(data).forEach(id => {
    nodes[id] = { ...data[id], children: [] };
  });
  const rootNodes = [];
  Object.values(nodes).forEach(node => {
    if (node.parent && nodes[node.parent]) {
      nodes[node.parent].children.push(node);
    } else if (!node.parent) {
      rootNodes.push(node);
    }
  });
  return rootNodes;
}

export function renderTree(nodes) {
  let html = '<ul>';
  for (const node of nodes) {
    let floraFaunaStr = '';
    if (node.floraFauna && Array.isArray(node.floraFauna) && node.floraFauna.length) {
      floraFaunaStr = ` <span style="color:#888;font-size:0.95em;">[${node.floraFauna.join(', ')}]</span>`;
    }
    html += `<li class="${node.type}">${node.name}${floraFaunaStr}`;
    if (node.children && node.children.length) {
      html += renderTree(node.children);
    }
    html += '</li>';
  }
  html += '</ul>';
  return html;
}
