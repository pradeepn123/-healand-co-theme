class SuggestionSearchBar extends HTMLElement {
    constructor() {
        super()
        this.inputContainer = this.querySelector("input")
        this.suggestionBarBtn = this.querySelector("button")
        this.sidebar = document.querySelector('#' + this.suggestionBarBtn.getAttribute("data-sidebar-id"))
        this.searchForm = document.querySelector("#SearchSidebarForm")
        this.isSidebarOpen = false;
    }

    connectedCallback() {
        this.inputContainer.addEventListener("click", () => {
            if (this.sidebar.getAttribute("data-aria-expanded") != "true") {
                this.sidebar.open()
                setTimeout(function () {
                    this.inputContainer.focus()
                }.bind(this), 20)
            }
        })
        this.inputContainer.addEventListener("keyup", this._handleInputChange.bind(this))
    }

    _handleInputChange(e) {
        const searchForm = document.querySelector("#SearchSidebarForm")
        const searchInputField = searchForm.q
        var event = new Event('input', {
            'bubbles': true,
            'cancelable': true
        });
        searchInputField.value = e.target.value
        searchInputField.dispatchEvent(event)

        if (e.keyCode == 13) {
            searchForm.submit()
        }
    }
}

if (!window.customElements.get('suggestion-search-bar')) {
    window.customElements.define('suggestion-search-bar', SuggestionSearchBar);
}
