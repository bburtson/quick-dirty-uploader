using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using BurtsonFileUploader.ViewModels;
using Microsoft.AspNetCore.Http;

namespace BurtsonFileUploader.Controllers
{
    [Route("[controller]")]
    public class AuthorizeController : Controller
    {
        private FamilyAuthorization _auth;
        private Dictionary<string, IConfigurationSection> _users;

        public AuthorizeController(IConfiguration config, FamilyAuthorization auth)
        {
            _auth = auth;
            _users = config.GetSection("Secrets")
                              .GetChildren()
                              .ToDictionary(k => k.Key);

        }

        [HttpPost]
        public IActionResult Authenticate(CredentialsViewModel auth)
        {
            if (_users.TryGetValue(auth.Username, out var user))
            {
                if(user.Value == auth.Password)
                {
                    _auth.Authorized = true;
                    _auth.Username = user.Key;
                    return RedirectToAction(actionName: "Index", 
                                            controllerName: "FileUpload");
                }
            }
            return RedirectToAction("Index", "Home");
        }


    }
}
