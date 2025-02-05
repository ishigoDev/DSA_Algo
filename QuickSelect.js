function _partition(arr, low, high)
{
    let pivot = arr[high], pivotloc = low;
        for (let i = low; i <= high; i++)
        {
            if (arr[i] < pivot)
            {
                let temp = arr[i];
                arr[i] = arr[pivotloc];
                arr[pivotloc] = temp;
                pivotloc++;
            }
        }
        let temp = arr[high];
        arr[high] = arr[pivotloc];
        arr[pivotloc] = temp;
 
        return pivotloc;
}

function kthSmallest(arr, low, high, k)
{
        let partition = _partition(arr, low, high);
 
        if (partition == k - 1)
            return arr[partition];
        else if (partition < k - 1)
            return kthSmallest(arr, partition + 1, high, k);
        else
            return kthSmallest(arr, low, partition - 1, k);
}

let array = [ 10, 4, 5, 8, 6, 11, 26];
let arraycopy = [10, 4, 5, 8, 6, 11, 26 ];
let kPosition = 4;
let length = array.length;

if (kPosition > length) {
    console.log("Index out of bound");
}
else 
{
console.log(
"K-th smallest element in array : "
+ kthSmallest(arraycopy, 0, length - 1,
              kPosition));
}