import { assert } from 'chai';
import Graph from './graph';

describe('Graph', () => {
    it('should have methods to a) add and remove vertices & edges, b) perform recursive DFS', () => {
        let g = new Graph();

        g.addVertex('Paris');
        g.addVertex('Brest');
        g.addVertex('Toulouse');
        g.addVertex('Bordeaux');
        g.addVertex('Geneva');
        g.addVertex('Marceille');

        g.addEdge('Paris', 'Brest');
        g.addEdge('Paris', 'Geneva');
        g.addEdge('Paris', 'Toulouse');
        g.addEdge('Paris', 'Bordeaux');
        g.addEdge('Paris', 'Marceille');
        g.addEdge('Marceille', 'Toulouse');
        g.addEdge('Marceille', 'Brest');
        g.addEdge('Bordeaux', 'Geneva');
        g.addEdge('Bordeaux', 'Toulouse');

        g.removeEdge('Paris', 'Toulouse');

        g.removeVertex('Toulouse');

        assert.sameOrderedMembers(g.dfsRecursive('Paris'), ["Paris", "Brest", "Marceille", "Geneva", "Bordeaux"]);
    });

    it('should perform iterative DFS in a given graph', () => {
        let g = new Graph();

        g.addVertex('Cali');
        g.addVertex('Bucaramanga');
        g.addVertex('Ibaque');
        g.addVertex('Zarzal');
        g.addVertex('Medellin');
        g.addVertex('La Pintada');

        g.addEdge('Cali', 'Bucaramanga');
        g.addEdge('Cali', 'Ibaque');
        g.addEdge('Bucaramanga', 'Zarzal');
        g.addEdge('Ibaque', 'Medellin');
        g.addEdge('Zarzal', 'Medellin');
        g.addEdge('Zarzal', 'La Pintada');
        g.addEdge('Medellin', 'La Pintada');

        assert.sameOrderedMembers(g.dfsIterative('Cali'), ['Cali', 'Ibaque', 'Medellin', 'La Pintada', 'Zarzal', 'Bucaramanga']);
    });

    it('should perform BFS in a given graph', () => {
        let g = new Graph();

        g.addVertex('Cali');
        g.addVertex('Bucaramanga');
        g.addVertex('Ibaque');
        g.addVertex('Zarzal');
        g.addVertex('Medellin');
        g.addVertex('La Pintada');

        g.addEdge('Cali', 'Bucaramanga');
        g.addEdge('Cali', 'Ibaque');
        g.addEdge('Bucaramanga', 'Zarzal');
        g.addEdge('Ibaque', 'Medellin');
        g.addEdge('Zarzal', 'Medellin');
        g.addEdge('Zarzal', 'La Pintada');
        g.addEdge('Medellin', 'La Pintada');

        assert.sameOrderedMembers(g.bfs('Cali'), ['Cali', 'Bucaramanga', 'Ibaque', 'Zarzal', 'Medellin', 'La Pintada']);
    });
});
