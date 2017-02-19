var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        document.getElementById("new_activity").addEventListener("click", new_activity);
    }
};

app.initialize();

function new_activity() {
    console.log(window);
    window.cordova.plugins.CordovaAlarmPlugin.new_activity(
        "",
        function(res) {
            console.log(res);
        },
        function(err) {
            console.log(err);
        }
    );
}