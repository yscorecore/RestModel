using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;

namespace RestModel.Generator.TypeScript.UnitTest
{
    public class NameManagerTest
    {
        [Fact]
        public void ShouldGetOriginName()
        {
            var nameManager = new NameManager();
            nameManager.Request("name").Should().Be("name");
        }
        [Fact]
        public void ShouldGetNewNameWhenRequestTwice()
        {
            var nameManager = new NameManager();
            _ = nameManager.Request("name");
            nameManager.Request("name").Should().Be("name2");
        }
        [Fact]
        public void ShouldGetNewNameWhenRequest3Times()
        {
            var nameManager = new NameManager();
            _ = nameManager.Request("name");
            _ = nameManager.Request("name");
            nameManager.Request("name").Should().Be("name3");
        }
    }
}
