// class Unionfind {
//     constructor(n) {
//         this.parent = new Map();
//         this.rank = new Map();

//         for(let i=0; i<n; i++) {
//             this.parent.set(i, i);
//             this.rank.set(i, 1);
//         }
//     }

//     find(n) {
//         let p = this.parent.get(n);
//         while(p !== this.parent.get(p)) {
//             this.parent.set(p, this.parent.get(this.parent.get(p)));
//             p = this.parent.get(p);
//         }

//         return p
//     }

//     union(n1, n2) {
//         let p1 = this.find(n1);
//         let p2 = this.find(n2);

//         if(p1 === p2) return false;

//         if(this.rank.get(p1) < this.rank.get(p2)) {
//             this.parent.set(p1, p2);
//             this.rank.set(p2, this.rank.get(p2) + this.rank.get(p1));
//         } else  {
//             this.parent.set(p2, p1)
//              this.rank.set(p1, this.rank.get(p2) + this.rank.get(p1));
//         } 

//         console.log("Inside ",this.rank)

//         return true;
//     }
// }

class Unionfind {
    /**
     * @constructor
     * @param {number} n
     */
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    /**
     * @param {number} v1
     * @return {number}
     */
    find(v1) {
        if (this.par[v1] !== v1) {
            this.par[v1] = this.find(this.par[v1]);
        }
        return this.par[v1];
    }

    /**
     * @param {number} v1
     * @param {number} v2
     * @return {boolean}
     */
    union(v1, v2) {
        const p1 = this.find(v1),
            p2 = this.find(v2);
        if (p1 === p2) return false;
        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.par[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        return true;
    }
}


class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        for(let i=0; i<edges.length; i++) {
            edges[i] = [...edges[i], i];
        }

        edges.sort((a, b) => a[2] - b[2]);

        let mst_weight = 0;
        let uf = new Unionfind(n);
        for(let [n1, n2, wt, i] of edges) {
            if(uf.union(n1, n2)) {
                mst_weight += wt;
            }
        }

        let critical = [];
        let pseudoCritical = [];

        for(let [n1, n2, e_wt, i] of edges) {
            uf = new Unionfind(n);
            let wt = 0;

            for(let [n2, n3, e1_wt, j] of edges) {
                if(i !== j && uf.union(n2, n3)) {
                    wt += e1_wt;
                }
            }
            if(
                // Math.max(...[...uf.rank.values()]) !== n 
                Math.max(...uf.rank) !== n
                || wt > mst_weight) {        
                critical.push(i);
                continue;
            }

            uf = new Unionfind(n);
            uf.union(n1, n2);
            wt = e_wt;

            for(let [n4, n5, e2_wt, j] of edges) {
                if(uf.union(n4, n5)) {
                    wt += e2_wt;
                }
            }
            if(wt === mst_weight) {
                pseudoCritical.push(i);
            }
        }

        return [critical, pseudoCritical]
    }
}
