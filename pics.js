var counter = 20;

window.addEventListener("load", function () {  // or "DOMContentLoaded" => if images can load after the page is visible
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
})

function resizeGridItem(item) {
	grid = document.getElementsByClassName("main-grid")[0];
	rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
	rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
	rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
	item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
	allItems = document.getElementsByClassName("item");
	for (x = 0; x < allItems.length; x++) {
		resizeGridItem(allItems[x]);
	}
}

function imageView(img_src) {
	var parent = document.getElementById("main-grid-id");
	var box = document.createElement('div');
	box.className = "item";
	var content_box = document.createElement('div');
	content_box.className = "content";
	var img = document.createElement('img');
	img.src = img_src;
	img.className = "photo";
	content_box.appendChild(img);
	box.appendChild(content_box);
	parent.appendChild(box);
}

function display(start, end) {
	for (let i = start + 1; i <= end; i++) {
		imageView(arr[i]);
	}
	setTimeout(resizeAllGridItems, 800);
}

function loadMore() {
	var startVal = counter;
	counter += 15;
	display(startVal,counter);
}

window.addEventListener("load", () => setInterval(resizeAllGridItems, 1000));
window.addEventListener("load", () => {
	document.getElementById("load-more-content-id").style.display = "block";
});
window.addEventListener("resize", resizeAllGridItems);